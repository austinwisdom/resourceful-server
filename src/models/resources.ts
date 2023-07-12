import { ObjectId } from "mongodb";
import type { WithId, Document } from 'mongodb'

export default interface Resources extends WithId<Document> {
  id: ObjectId;
  title: string;
  link: string;
  category: string;
}