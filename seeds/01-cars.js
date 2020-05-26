exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("cars")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("cars").insert([
                {
                    id: 1,
                    VIN: "dfdf4544f1e4d1",
                    make: "dodge",
                    model: "ram",
                    milage: 10241,
                    transmission: "automatic",
                    title: "clean",
                },
                {
                    id: 2,
                    VIN: "dfdf4544f1e4d1",
                    make: "dodge",
                    model: "ram",
                    milage: 10241,
                    transmission: "automatic",
                    title: "clean",
                },
                {
                    id: 3,
                    VIN: "dfdf4544f1e4d1",
                    make: "dodge",
                    model: "ram",
                    milage: 10241,
                    transmission: "automatic",
                    title: "clean",
                },
                {
                    id: 4,
                    VIN: "dfdf4544f1e4d1",
                    make: "dodge",
                    model: "ram",
                    milage: 10241,
                    transmission: "automatic",
                    title: "clean",
                },
            ]);
        });
};
