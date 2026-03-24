declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.png" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}
