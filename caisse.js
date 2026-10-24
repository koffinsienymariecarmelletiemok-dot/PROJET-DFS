const budget_client=20000;
const prix_de_cahier= 1500;
const prix_de_stylo= 500;
const quantite_cahier= 4;
const quantite_stylo= 3;
const montant_cahier= prix_de_cahier*quantite_cahier;
const montant_stylo= prix_de_stylo * quantite_stylo;
const total_achat= montant_cahier + montant_stylo;

console.log("Cahier : " , montant_cahier);
console.log("Stylos : " , montant_stylo);
console.log("Total :" ,total_achat);
console.log("Budget :" , budget_client);

if (total_achat <= budget_client){
    console.log("budget suffisante");
}
else{
    console.log("budget insuffisant");
}