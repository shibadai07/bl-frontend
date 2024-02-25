export async function fetchMyBucketList() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/buckets/get-my-bucketlist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: 1
        })
    });
    if (!response.ok) {
        throw new Error('データの取得に失敗しました');
    }
    return await response.json();
}
