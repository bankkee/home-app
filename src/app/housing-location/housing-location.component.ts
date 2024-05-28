import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "./housinglocation";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-housing-location",
  templateUrl: "./housing-location.component.html",
  styleUrls: ["./housing-location.component.css"],
  imports: [CommonModule, RouterModule],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  ngOnInit() {}
}
