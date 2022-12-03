export interface PropsCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  firstList: PropsLinkList;
  secondList: PropsLinkList;
}

export interface PropsLinkList {
  title: string;
  baseUrl: string;
  links: PropsLink[];
}

export interface PropsLink {
  title: string;
  id: string;
}
