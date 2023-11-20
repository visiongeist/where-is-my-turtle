import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment'
// import { SupabaseService } from '../../supabase.service'

@Component({
  selector: 'app-where-is-my-turtle',
  templateUrl: './where-is-my-turtle.component.html',
  styleUrls: ['./where-is-my-turtle.component.scss']
})
export class WhereIsMyTurtleComponent {
  constructor(
    private http: HttpClient
    // private readonly supabase: SupabaseService,
  ) { }

  url = '';
  file!: File;
  source = '';

  loading = false

  async onSelectFile(e: any) {

    // You can uncomment this console to check the array we get once we upload
    console.log(e.target.files)

    if (e.target.files) {
      this.file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.source = reader.result as string;
      }
      reader.readAsDataURL(this.file);

      // supabase upload
      //   const { data, error } = await this.supabase.getStorage()
      //     .from('images')
      //     .upload(this.file?.name, this.file as File);

      //     // You can uncomment this console to check whether its successfully uploaded
      //     console.log(data ? 'Success' : error)
    }
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;

      if (this.file) {
        const formData = new FormData();
        formData.append('image', this.file);

        const res = await this.http.post(environment.predictionUrl, formData).toPromise();
        alert(JSON.stringify(res));
      }

      // TODO call huggingface api
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }
}
