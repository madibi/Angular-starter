export interface Menu {
  isActive?: boolean;
  icon: string;
  title: string;
  info?: string;
  link: string;
  subMenus?: Menu[];
}
