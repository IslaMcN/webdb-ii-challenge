exports.up = function(knex){
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('username', 50).unique.notNullable()
        tbl.string('password', 50).notNullable()
    })
    .createTable('profile', tbl => {
        tbl.increments()
        tbl.string('name', 50).notNullable()
        tbl.string('location', 50).notNullable()
    })
}

exports.down = function(knex){
    return knex.schema.dropTableIfExists('profile')
    .dropTableIfExists('users')
}