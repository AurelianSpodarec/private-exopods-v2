export interface IContainerRevision {
  _id: string;
  rev: number;
  image_tag: string;
  count: number;
  port: number;
  env: string[];
  args: string;
  command: string;
  last_updated: string;
}

export interface IContainerInfo {
  _id: string;
  uid: string;
  container_name: string;
  image: string;
  preset: string;
  revisions: IContainerRevision[];
  valid_name: string;
  creditsApplied: number;
  mark_for_deletion: boolean;
  is_deleted: boolean;
  created_time: string;
  updated_time: string;
  __v: number;
  next_check_time: string;
  rev_active: string;
  subdomain: string;
}

export interface IContainer {
  container: IContainerInfo;
  status: string;
  events: any[];
}
