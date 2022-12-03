'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user',
      [
        {
          id: 1,
          email: "elit.fermentum@hotmail.couk",
          password: "PQY27ZSS7XN",
          firstName: "Ezekiel",
          lastName: "Howell",
          birthday: "2022-04-08 02:47:35",
          cpf: "GMV18LSX9ZQ",
          rg: "QWE35XND6",
          typeId: "3"
        },
        {
          id: 2,
          email: "suspendisse.eleifend.cras@outlook.ca",
          password: "IAN44DRS5GQ",
          firstName: "Unity",
          lastName: "Donovan",
          birthday: "2023-10-19 11:56:47",
          cpf: "EEI27SSX9CU",
          rg: "RUH27PYW2",
          typeId: "1"
        },
        {
          id: 3,
          email: "magnis.dis@aol.ca",
          password: "RUV28UFX6PV",
          firstName: "Ali",
          lastName: "Harrington",
          birthday: "2021-12-25 14:19:49",
          cpf: "HGY01FFN2LK",
          rg: "VMK08VTQ4",
          typeId: "1"
        },
        {
          id: 4,
          email: "dapibus.id.blandit@icloud.edu",
          password: "SDQ40YTT4IF",
          firstName: "Dillon",
          lastName: "Ramos",
          birthday: "2023-06-23 06:32:20",
          cpf: "LFA77QEU6FT",
          rg: "PWI10SSN0",
          typeId: "2"
        },
        {
          id: 5,
          email: "ac.mattis@outlook.org",
          password: "LVI16ODL6NQ",
          firstName: "Ethan",
          lastName: "Pena",
          birthday: "2022-02-27 18:17:28",
          cpf: "TCF05ROS2DU",
          rg: "FEO93XIK6",
          typeId: "1"
        },
        {
          id: 6,
          email: "phasellus@icloud.couk",
          password: "THX66ISU1RT",
          firstName: "Wyoming",
          lastName: "Reeves",
          birthday: "2023-04-05 07:06:14",
          cpf: "EPC52LBF8FZ",
          rg: "MLQ05TTV4",
          typeId: "3"
        },
        {
          id: 7,
          email: "elit@protonmail.couk",
          password: "WEL15YXN7EX",
          firstName: "Beau",
          lastName: "Phelps",
          birthday: "2023-08-12 22:22:27",
          cpf: "ITE88DID7KY",
          rg: "PHH78WAH2",
          typeId: "3"
        },
        {
          id: 8,
          email: "ipsum.suspendisse.non@outlook.net",
          password: "KWQ02AAO9XN",
          firstName: "Garrison",
          lastName: "Farmer",
          birthday: "2022-07-31 20:33:53",
          cpf: "WRK73UTP9UL",
          rg: "DIS82XDD5",
          typeId: "2"
        },
        {
          id: 9,
          email: "dui.cum@icloud.edu",
          password: "DDX15IDW1WY",
          firstName: "Jada",
          lastName: "Howe",
          birthday: "2023-11-06 07:23:29",
          cpf: "XEF64XUP8YT",
          rg: "NKC76MZU8",
          typeId: "2"
        },
        {
          id: 10,
          email: "lobortis.quis@outlook.couk",
          password: "IYY02ERV7ES",
          firstName: "Miranda",
          lastName: "O'connor",
          birthday: "2022-10-04 22:15:07",
          cpf: "PXW51EUW6VC",
          rg: "PKC66DLV1",
          typeId: "1"
        },
        {
          id: 11,
          email: "velit@icloud.couk",
          password: "NYY14AQK6BE",
          firstName: "Ryder",
          lastName: "Ayers",
          birthday: "2022-05-25 08:16:17",
          cpf: "BGN97DHD4RD",
          rg: "LRK42UTB8",
          typeId: "1"
        },
        {
          id: 12,
          email: "risus.quis@protonmail.edu",
          password: "YRX58EXC4LD",
          firstName: "Cora",
          lastName: "Soto",
          birthday: "2022-08-08 03:43:52",
          cpf: "XQS66RSV8MC",
          rg: "HMC00MKO3",
          typeId: "1"
        },
        {
          id: 13,
          email: "vestibulum.ante.ipsum@yahoo.net",
          password: "BTL45GNB4VU",
          firstName: "Illana",
          lastName: "Nieves",
          birthday: "2022-08-11 08:41:40",
          cpf: "RHK34NGS1RU",
          rg: "LXQ93EYK3",
          typeId: "3"
        },
        {
          id: 14,
          email: "amet.diam@google.net",
          password: "UHN31YLH7DA",
          firstName: "Urielle",
          lastName: "Clark",
          birthday: "2022-04-06 17:15:26",
          cpf: "XGE23PWD8PZ",
          rg: "CLQ62LME2",
          typeId: "3"
        },
        {
          id: 15,
          email: "erat.neque.non@hotmail.org",
          password: "LFJ26TXX7CS",
          firstName: "Hollee",
          lastName: "Frazier",
          birthday: "2021-12-02 23:20:04",
          cpf: "WOX65HXT1XH",
          rg: "LBM44UNR9",
          typeId: "2"
        },
        {
          id: 16,
          email: "dis.parturient@aol.net",
          password: "JXQ72UQI4OG",
          firstName: "Noelle",
          lastName: "Giles",
          birthday: "2022-05-01 03:05:10",
          cpf: "QBO80QCJ7BE",
          rg: "LJM73LMJ5",
          typeId: "2"
        },
        {
          id: 17,
          email: "dictum@yahoo.net",
          password: "DTY58HFQ7BX",
          firstName: "Igor",
          lastName: "Woods",
          birthday: "2023-09-27 12:12:20",
          cpf: "SMV45LEP1MR",
          rg: "NKH80ETL4",
          typeId: "1"
        },
        {
          id: 18,
          email: "ornare.elit@protonmail.net",
          password: "PPG85EZO9XT",
          firstName: "Shoshana",
          lastName: "Holder",
          birthday: "2023-07-02 11:27:32",
          cpf: "ACF46HUS5RE",
          rg: "LKV24REO3",
          typeId: "1"
        },
        {
          id: 19,
          email: "dui@protonmail.edu",
          password: "FKE37YCW5EO",
          firstName: "Lavinia",
          lastName: "Sears",
          birthday: "2023-06-14 09:00:04",
          cpf: "YMF28LRS8MI",
          rg: "CNR81ZBJ4",
          typeId: "1"
        },
        {
          id: 20,
          email: "egestas.nunc@yahoo.org",
          password: "FBU67CJN4FQ",
          firstName: "Bernard",
          lastName: "Burton",
          birthday: "2022-08-14 09:16:33",
          cpf: "WVA85ELL8PB",
          rg: "REY82MFS1",
          typeId: "3"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
