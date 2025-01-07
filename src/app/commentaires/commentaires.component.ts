import { Commentaire } from './../commentaire';
import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../services/commentaire.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-commentaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commentaires.component.html',
  styleUrl: './commentaires.component.css',
})
export class CommentairesComponent implements OnInit {
  commentaires: Commentaire[] = [];
  loading: boolean = false;

  constructor(private commentaireService: CommentaireService) {}
  ngOnInit(): void {
    this.commentaireService
      .getCommentaires()
      .subscribe((data: Commentaire[]) => {
        this.commentaires = data;
      });
  }

  deleteComment(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce commentaire ?')) {
      this.commentaireService.deleteComment(id).subscribe({
        next: () => {
          // Supprimer localement le commentaire de la liste
          this.commentaires = this.commentaires.filter(
            (commentaire) => commentaire.id !== id
          );
          alert('Commentaire supprimé avec succès.');
        },
      });
    }
  }
}



