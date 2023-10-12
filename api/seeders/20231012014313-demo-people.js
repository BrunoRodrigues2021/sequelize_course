module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('People', [
            {
                name: 'Ana Souza',
                active: true,
                mail: 'ana@ana.com',
                role: 'estudante',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Marcos Cintra',
                active: true,
                mail: 'marcos@marcos.com',
                role: 'estudante',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Felipe Cardoso',
                active: true,
                mail: 'felipe@felipe.com',
                role: 'estudante',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sandra Gomes',
                active: false,
                mail: 'sandra@sandra.com',
                role: 'estudante',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Paula Morais',
                active: true,
                mail: 'paula@paula.com',
                role: 'docente',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sergio Lopes',
                active: true,
                mail: 'sergio@sergio.com',
                role: 'docente',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('People', null, {});
    }
};
