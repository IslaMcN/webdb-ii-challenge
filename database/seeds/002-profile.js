exports.seed = function(knex){
    return knex('profile').del()
    .then(function (){
        return knex('profile').insert([
            {name: "Arya", location: "Highland" }
        ])
    })
}