import { useContext } from "react";
import { TRPCApiClientContext } from "@/provider/ApiProvider";

export const useApiClient = () => useContext(TRPCApiClientContext);
