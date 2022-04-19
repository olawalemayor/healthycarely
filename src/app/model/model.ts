export interface FSContent {
  icon: string;
  title: string;
  text: string;
}

export interface Doctors {
  imgUrl: string;
  name: string;
  role: string;
}

export interface Rating {
  votes: string;
  title: string;
  rating: string;
}

export interface FooterLink {
  section: string;
  links: link[];
}

interface link {
  link: string;
  text: string;
}
