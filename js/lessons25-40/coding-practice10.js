'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const myAge = plan.age;
        const {languages} = plan.skills;
        
        let str = `Мне ${myAge} и я владею языками: `;  
        
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));// 'Мне 29 и я владею языками: RU ENG'

function showProgrammingLangs(plan) {

    const {programmingLangs} = plan.skills;
    let str = '';
 
    for (let i in programmingLangs) {
        str += `Язык ${i} изучен на ${programmingLangs[i]}\n`;
    }  
    
    return str;
        
}

console.log(showProgrammingLangs(personalPlanPeter)); //"Язык js изучен на 20% Язык php изучен на 10%"

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

