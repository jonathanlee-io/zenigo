import {NgClass} from '@angular/common';
import {Component, input} from '@angular/core';

import {ProductPostDto} from '../../../../dtos/projects/ProductPostDto';

@Component({
  selector: 'app-product-post',
  imports: [NgClass],
  templateUrl: './product-post.component.html',
  styleUrl: './product-post.component.scss',
})
export class ProductPostComponent {
  post = input.required<ProductPostDto>();

  postUpVoteMap = new Map<string, boolean>();

  doUpVote(productPostDto: ProductPostDto) {
    if (this.isAlreadyUpvoted(productPostDto)) {
      return;
    }
    productPostDto.upVotes++;
    this.postUpVoteMap.set(productPostDto.id, true);
  }

  isAlreadyUpvoted(post: ProductPostDto) {
    return this.postUpVoteMap.get(post.id) ?? false;
  }
}
