import dataSet from './data/rickandmorty/rickandmorty.js';

const dataAll = dataSet.results;

//----------------------------FILTER FOR GENDER--------------------------------
const filterGender = (dataAll, eventoG) => {
    return dataAll.filter((genders) => {
        if (genders.gender.indexOf(eventoG) !== -1) {
            return true;
        }
    });
}

//----------------------------FILTER FOR SPECIES--------------------------------
const filterX = (dataAll, evento) => {
    return dataAll.filter((specie) => {
        if (specie.species.indexOf(evento) !== -1) {
            return true;
        }
    });
}

//----------------------------FILTER FOR STATUS--------------------------------
const filterStatus = (dataAll, eventoSt) => {
    return dataAll.filter((statu) => {
        if (statu.status.indexOf(eventoSt) !== -1) {
            return true;
        }
    });
}

//----------------------------ORDER FOR AZ--------------------------------
const sortFilterAZ = (array) => {
    return array.sort((a, b) => ((a.name < b.name) ? -1 : 1));
};

const sortFilterZA = (array) => {
    return array.sort((a, b) => ((a.name > b.name) ? -1 : 1));
};
export {
    dataAll,
    sortFilterAZ,
    sortFilterZA,
    filterX,
    filterGender,
    filterStatus
};
