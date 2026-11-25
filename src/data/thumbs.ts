// Miniaturas locales de los vídeos (src/assets/videos/<id>.jpg).
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/videos/*.jpg', { eager: true });

export function thumb(id: string): ImageMetadata {
  const f = files[`../assets/videos/${id}.jpg`];
  if (!f) throw new Error(`Falta la miniatura del vídeo ${id}: ejecuta «npm run miniaturas».`);
  return f.default;
}
