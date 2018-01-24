export interface MeetupMember {

  event_context: EventContext;
  id: number;
  name: string;
  photo: MeetupPhoto;
}

export interface EventContext {
  host: boolean;
}

export interface MeetupPhoto {
  base_url: string;
  highres_link: string;
  id: number;
  photo_link: string;
  thumb_link: string;
  type: string;
}
