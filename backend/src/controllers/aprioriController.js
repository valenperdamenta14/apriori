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
    db.query(
        `SELECT * FROM data_transaksi`,
        (err, rows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    message: "Query gagal",
                });
            }
            try {
                const totalTransaksi = rows.length;
                const transaksi = rows.map((item) => {
                    return item.nama_obat
                        .split("|")
                        .map((i) => i.trim());

                });
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
                        (
                            frekuensi /
                            totalTransaksi
                        ) * 100;
                    if (support >= 10) {
                        itemset1.push({
                            item,
                            frekuensi,
                            support:
                                support.toFixed(2),
                        });
                    }
                }
                const itemCount2 = {};
                transaksi.forEach((items) => {
                    const kombinasi =
                        combinations(items, 2);
                    kombinasi.forEach((combo) => {
                        const key =
                            combo
                            .sort()
                            .join(", ");
                        itemCount2[key] =
                            (itemCount2[key] || 0) + 1;
                    });
                });
                const itemset2 = [];
                for (const item in itemCount2) {
                    const frekuensi =
                        itemCount2[item];
                    const support =
                        (
                            frekuensi /
                            totalTransaksi
                        ) * 100;
                    if (support >= 10) {
                        itemset2.push({
                            item,
                            frekuensi,
                            support:
                                support.toFixed(2),
                        });
                    }
                }
                const itemCount3 = {};
                transaksi.forEach((items) => {
                    const kombinasi =
                        combinations(items, 3);
                    kombinasi.forEach((combo) => {
                        const key =
                            combo
                            .sort()
                            .join(", ");
                        itemCount3[key] =
                            (itemCount3[key] || 0) + 1;
                    });
                });
                const itemset3 = [];
                for (const item in itemCount3) {
                    const frekuensi =
                        itemCount3[item];
                    const support =
                        (
                            frekuensi /
                            totalTransaksi
                        ) * 100;
                    if (support >= 5) {
                        itemset3.push({
                            item,
                            frekuensi,
                            support:
                                support.toFixed(2),
                        });
                    }
                }
                res.json({
                    total_transaksi:
                        totalTransaksi,
                    itemset1,
                    itemset2,
                    itemset3,
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