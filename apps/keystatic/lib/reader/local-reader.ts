import keystaticConfig from "@/keystatic.config";
import { createReader } from "@keystatic/core/reader";

export const localReader = createReader(process.cwd(), keystaticConfig);