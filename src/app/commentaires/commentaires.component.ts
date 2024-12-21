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

  constructor(private commentaireService: CommentaireService) {}
  ngOnInit(): void {
    this.commentaireService
      .getCommentaires()
      .subscribe((data: Commentaire[]) => {
        this.commentaires = data;
      });
  }
}


