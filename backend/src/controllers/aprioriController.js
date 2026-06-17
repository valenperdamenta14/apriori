const db = require("../config/db");

function combinations(arr, k) {
    const result = [];

    function combine(start, temp) {
        if (temp.length === k) {
            result.push([...temp]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            temp.push(arr[i]);
            combine(i + 1, temp);
            temp.pop();
        }
    }

    combine(0, []);
    return result;
}

exports.prosesApriori = (req, res) => {
    const minSupport =
        Number(req.query.minSupport) || 10;

    const minConfidence =
        Number(req.query.minConfidence) || 60;

    db.query(
        "SELECT * FROM data_transaksi",
        (err, rows) => {
            if (err) {
                console.error(err);

                return res.status(500).json({
                    message: "Query gagal",
                });
            }

            try {
                const totalTransaksi = rows.length;

                const transaksi = rows.map((item) =>
                    item.nama_obat
                        .split(",")
                        .map((i) => i.trim())
                        .filter(Boolean)
                );

                // ==========================
                // ITEMSET 1
                // ==========================

                const itemCount1 = {};

                transaksi.forEach((items) => {
                    items.forEach((item) => {
                        itemCount1[item] =
                            (itemCount1[item] || 0) + 1;
                    });
                });

                const itemset1 = [];

                for (const item in itemCount1) {
                    const frekuensi =
                        itemCount1[item];

                    const support =
                        (frekuensi /
                            totalTransaksi) *
                        100;

                    if (support >= minSupport) {
                        itemset1.push({
                            item,
                            frekuensi,
                            support:
                                support.toFixed(2),
                            confidence: "100.00",
                        });
                    }
                }

                // ==========================
                // ITEMSET 2
                // ==========================

                const itemCount2 = {};

                transaksi.forEach((items) => {
                    combinations(items, 2).forEach(
                        (combo) => {
                            const key = combo
                                .sort()
                                .join(", ");

                            itemCount2[key] =
                                (itemCount2[key] || 0) + 1;
                        }
                    );
                });

                const itemset2 = [];

                for (const item in itemCount2) {
                    const frekuensi =
                        itemCount2[item];

                    const support =
                        (frekuensi /
                            totalTransaksi) *
                        100;

                    if (support >= minSupport) {
                        const items =
                            item.split(", ");

                        const itemA =
                            items[0];

                        const freqA =
                            itemCount1[
                                itemA
                            ] || 1;

                        const confidence =
                            (frekuensi /
                                freqA) *
                            100;

                        itemset2.push({
                            item,
                            frekuensi,
                            support:
                                support.toFixed(2),
                            confidence:
                                confidence.toFixed(
                                    2
                                ),
                        });
                    }
                }

                // ==========================
                // ITEMSET 3
                // ==========================

                const itemCount3 = {};

                transaksi.forEach((items) => {
                    combinations(items, 3).forEach(
                        (combo) => {
                            const key = combo
                                .sort()
                                .join(", ");

                            itemCount3[key] =
                                (itemCount3[key] || 0) + 1;
                        }
                    );
                });

                const itemset3 = [];

                for (const item in itemCount3) {
                    const frekuensi =
                        itemCount3[item];

                    const support =
                        (frekuensi /
                            totalTransaksi) *
                        100;

                    if (support >= minSupport) {
                        const items =
                            item.split(", ");

                        const pasangan =
                            [items[0], items[1]]
                                .sort()
                                .join(", ");

                        const freqAB =
                            itemCount2[
                                pasangan
                            ] || 1;

                        const confidence =
                            (frekuensi /
                                freqAB) *
                            100;

                        itemset3.push({
                            item,
                            frekuensi,
                            support:
                                support.toFixed(2),
                            confidence:
                                confidence.toFixed(
                                    2
                                ),
                        });
                    }
                }

                // ==========================
                // ASSOCIATION RULE
                // ==========================

                const associationRules =
                    [];

                itemset2.forEach((rule) => {
                    const items =
                        rule.item.split(", ");

                    if (
                        items.length !== 2
                    )
                        return;

                    const A = items[0];
                    const B = items[1];

                    const supportAB =
                        parseFloat(
                            rule.support
                        );

                    const supportA =
                        parseFloat(
                            itemset1.find(
                                (x) =>
                                    x.item ===
                                    A
                            )?.support || 0
                        );

                    const supportB =
                        parseFloat(
                            itemset1.find(
                                (x) =>
                                    x.item ===
                                    B
                            )?.support || 0
                        );

                    if (
                        supportA > 0
                    ) {
                        const confidenceAB =
                            (supportAB /
                                supportA) *
                            100;

                        if (
                            confidenceAB >=
                            minConfidence
                        ) {
                            associationRules.push(
                                {
                                    rule: `${A} → ${B}`,
                                    support:
                                        supportAB.toFixed(
                                            2
                                        ),
                                    confidence:
                                        confidenceAB.toFixed(
                                            2
                                        ),
                                }
                            );
                        }
                    }

                    if (
                        supportB > 0
                    ) {
                        const confidenceBA =
                            (supportAB /
                                supportB) *
                            100;

                        if (
                            confidenceBA >=
                            minConfidence
                        ) {
                            associationRules.push(
                                {
                                    rule: `${B} → ${A}`,
                                    support:
                                        supportAB.toFixed(
                                            2
                                        ),
                                    confidence:
                                        confidenceBA.toFixed(
                                            2
                                        ),
                                }
                            );
                        }
                    }
                });

                itemset1.sort(
                    (a, b) =>
                        parseFloat(
                            b.support
                        ) -
                        parseFloat(
                            a.support
                        )
                );

                itemset2.sort(
                    (a, b) =>
                        parseFloat(
                            b.support
                        ) -
                        parseFloat(
                            a.support
                        )
                );

                itemset3.sort(
                    (a, b) =>
                        parseFloat(
                            b.support
                        ) -
                        parseFloat(
                            a.support
                        )
                );

                associationRules.sort(
                    (a, b) =>
                        parseFloat(
                            b.confidence
                        ) -
                        parseFloat(
                            a.confidence
                        )
                );

                res.json({
                    total_transaksi:
                        totalTransaksi,
                    min_support:
                        minSupport,
                    min_confidence:
                        minConfidence,
                    itemset1,
                    itemset2,
                    itemset3,
                    associationRules,
                });
            } catch (error) {
                console.error(error);

                res.status(500).json({
                    message:
                        "Terjadi kesalahan server",
                });
            }
        }
    );
};