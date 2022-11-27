export interface PropsCard {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  firstList: PropsLinkList;
  secondList: PropsLinkList;
}

export interface PropsLinkList {
  title: string;
  links: PropsLink[];
}

export interface PropsLink {
  title: string;
  gateway: string;
}
