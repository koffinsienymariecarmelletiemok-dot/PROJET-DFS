const nom_client ="Awa";
const nom_produit = "Ordinateur";
const prix_unitaire = 250000 ;
const quantite = 2;
const frais_livraison = 5000 ;
const tva = 0.18 ;
const Total_produit = prix_unitaire * quantite ;
const Tva_produit = Total_produit * tva;
const montant_total_TTC = Total_produit + Tva_produit ;
const montant_final_payer = montant_total_TTC + frais_livraison ;
const prix_moy = montant_total_TTC / quantite;

console.log("==== Reçus de commande ====")

console.log("Client:", nom_client);
console.log("Produit:", nom_produit);
console.log("Prix Unitaire:", prix_unitaire , "FCFA");
console.log("Quantité:", quantite);
console.log("");
console.log("Montant des produits :", Total_produit, "FCFA");
console.log("TVA (18%):", Tva_produit , "FCFA");
console.log("Montant TTC :", montant_total_TTC, "FCFA");
console.log("Livraison :", frais_livraison ,"FCFA");
console.log("TOTAL A PAYER :", montant_final_payer , "FCFA");
console.log("");
console.log("Prix moyen TTC par produit :", prix_moy , "FCFA");
console.log("Type du nom :", typeof nom_client );
console.log("Type du prix :", typeof prix_unitaire );
console.log("Type de la quantité :", typeof quantite);

