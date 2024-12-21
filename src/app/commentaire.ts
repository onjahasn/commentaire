export interface Commentaire {
  id: number; // L'identifiant du commentaire
  description: string; // Le texte du commentaire
  createdAt: string; // La date de création du commentaire
  recette: any[]; // Les recettes associées (ici un tableau vide pour l'instant)
  user: any | null; // L'utilisateur ayant créé le commentaire (null si non défini)
}
