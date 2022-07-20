import { Venue } from "@prisma/client";

export interface UserLoginRequestParams {
  email: string;
  password: string;
}

export interface UserRegisterRequestParams {
  email: string;
  password: string;
}

export type CreateVenuePayload = Pick<
  Venue,
  "ownerId" | "mainImage" | "name" | "numberOfTables"
>;

export type EditVenuePayload = Partial<
  Pick<Venue, "ownerId" | "mainImage" | "name" | "numberOfTables">
> & { id: string };
