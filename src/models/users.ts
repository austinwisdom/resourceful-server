import { ObjectId } from "mongodb";
import type { WithId, Document } from 'mongodb'

export default interface Users extends WithId<Document> {
  id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}
