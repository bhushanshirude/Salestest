import { Component } from '@angular/core';
import { UploadVideoTypePage } from './Upload_video_type_page/upload-video-type';
import { UploadVideoDetailsPage } from './Upload_video_details_page/upload-video-details';
import { UploadVideosPage } from './Upload_videos_page/upload-videos';
import { UploadImagePage } from './Upload_image_page/upload-image';

@Component({
  selector: 'page-upload-tabs',
  templateUrl: 'upload-tabs.html',
})
export class UploadTabsPage {
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  tab1Root = UploadVideoTypePage;
  tab2Root = UploadVideoDetailsPage;
  tab3Root = UploadVideosPage;
  tab4Root = UploadImagePage;
  constructor() {
  }
}
