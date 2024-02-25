// pages/bucketList.tsx

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { fetchMyBucketList } from '../api/fetchMyBucketlist';
import { Bucket } from '../types/BucketListType';

const BucketListPage: NextPage = () => {
  const [buckets, setBuckets] = useState<Bucket[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bucketList = await fetchMyBucketList();
        setBuckets(bucketList);
      } catch (error) {
        console.error('An error occurred while fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Bucket List</h1>
      {buckets.map((bucket) => (
        <div key={bucket.my_bucket_id}>
          <h2>{bucket.bucket_name}</h2>
          <p>{bucket.create_date}</p>
          <p>{bucket.update_date}</p>
          <p>{bucket.bucket_detail}</p>
        </div>
      ))}
    </div>
  );
};

export default BucketListPage;
