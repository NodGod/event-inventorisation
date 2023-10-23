import Item from './Item';
export default interface OrganisedEvent {
  id: number;
  name: string;
  description: string;
  date: Date;
  address: string;
  items: Item[];
}