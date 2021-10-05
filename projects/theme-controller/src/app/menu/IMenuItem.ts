export interface IMenuItem {
  title: string;
  icon?: string;
  path: string;
  children: IMenuItem[]
}
