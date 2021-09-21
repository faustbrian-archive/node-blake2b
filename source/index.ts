import { BLAKE2b } from "bcrypto";

export const hash = (content: Buffer | string | Buffer[]): Buffer => {
  if (Array.isArray(content)) {
    let blake2b = BLAKE2b.ctx;

    blake2b.init();

    for (const element of content) {
      blake2b = blake2b.update(element);
    }

    return blake2b.final();
  }

  return BLAKE2b.digest(
    content instanceof Buffer ? content : Buffer.from(content),
  );
};
