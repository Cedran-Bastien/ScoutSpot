import { CloudStorageContext } from "@/provider/CloudStorageProvider";
import { useContext } from "react";

export const useCloudStorageClient = () => {
  useContext(CloudStorageContext);
};
