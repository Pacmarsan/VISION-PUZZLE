const API_BASE = '/api';

export interface DiffResponse {
    mode: 'spot-diff';
    originalUrl: string;
    modifiedUrl: string;
    differences: Array<{
        id: string;
        bbox: [number, number, number, number];
        type: string;
        description: string;
    }>;
}

export interface FindObjResponse {
    mode: 'find-obj';
    originalUrl: string;
    targets: Array<{
        id: string;
        label: string;
        bbox: [number, number, number, number];
    }>;
}

export type GameResponse = DiffResponse | FindObjResponse;

export async function uploadImage(file: File, gameType: 'spot-diff' | 'find-obj' = 'spot-diff'): Promise<GameResponse> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('type', gameType);

    const res = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!res.ok) {
        throw new Error('Upload failed');
    }

    return res.json();
}
