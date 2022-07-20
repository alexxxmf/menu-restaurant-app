import { Venue } from "@prisma/client";

export interface UserLoginRequestParams {
  email: string;
  password: string;
}

export interface UserRegisterRequestParams {
  email: string;
  password: string;
}

export interface GetVenueRequestParams {
  id: string;
}

export interface DeleteVenueRequestParams {
  id: string;
}

export interface UpdateVenueRequestParams {
  id: string;
}

export type CreateVenuePayload = Pick<
  Venue,
  "ownerId" | "mainImage" | "name" | "numberOfTables"
>;

export type UpdateVenuePayload = Partial<
  Pick<Venue, "ownerId" | "mainImage" | "name" | "numberOfTables">
>;
