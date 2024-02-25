// types/BucketListType.ts

export interface Bucket {
    my_bucket_id: number;
    user_id: number;
    bucket_id: number;
    status_id: number;
    publish_flg: boolean | null;
    create_date: string;
    update_date: string;
    bucket_name: string;
    bucket_detail: string | null;
  }
  