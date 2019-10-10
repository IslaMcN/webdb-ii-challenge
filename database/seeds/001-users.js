exports.seed = function(knex){
    return knex('users').del()
    .then(function (){
        return knex('users').insert([
            {username: "Arya", password: "NoBoys"},
            {username: "Zelda", password: "Streeeeessss"}
        ])
    })
}