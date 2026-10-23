declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    ROOM_TOKEN_HASH?: string;
    BUCKET?: R2Bucket;
  }
}
