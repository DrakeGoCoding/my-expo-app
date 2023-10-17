export interface BaseModel {
  id: number;
  createdAt?: DateTime;
  updatedAt?: DateTime;
  deletedAt?: DateTime;
}

export type DateTime = Date | string | number | null;
