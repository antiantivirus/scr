export const prerender = false;

export async function GET() {
  try {
    const res = await fetch(
      'https://api.radiocult.fm/api/station/seyisfjorur-community-radio/schedule/live'
    );
    const data = await res.text();
    return new Response(data, {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response('{}', {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
