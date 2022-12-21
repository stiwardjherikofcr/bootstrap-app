import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { BreakingBadApiService } from '@services/breaking-bad-api.service';
import { ICharacter } from '@interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  characters: ICharacter[] = [];
  public charactersCopy: ICharacter[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private breakingBadApiService: BreakingBadApiService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.breakingBadApiService.getCharacters()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((characters: ICharacter[]) => {
        this.characters = characters;
        this.charactersCopy = characters;
      });
  }

  filterCharacters(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.characters = this.charactersCopy.filter((character: ICharacter) => character.name.toLowerCase().includes(filterValue));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
