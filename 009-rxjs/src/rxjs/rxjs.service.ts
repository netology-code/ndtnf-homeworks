import { Injectable } from "@nestjs/common";
import { firstValueFrom, toArray, from, map, mergeMap, take, Observable } from "rxjs";
import axios from "axios";

@Injectable()
export class RxjsService {
  private readonly githubURL = "https://xeno-canto.org/api/2/recordings?query=";

  private getGithub(q: string, count: number): Observable<any> {
    return from(axios.get(`${this.githubURL}${q}`)).pipe(
      map((res: any) => {
        console.log('API Response:', res.data); 
        if (res.data && res.data.recordings) {
          return res.data.recordings;
        } else {
          throw new Error("Invalid response structure");
        }
      }),
      mergeMap(recordings => from(recordings)),
      take(count)
    );
  }

  async searchRepositories(q: string): Promise<any> {
    if (!q) {
      throw new Error('Query parameter "q" is required');
    }
    const data$ = this.getGithub(q, 10).pipe(toArray());
    try {
      const result = await firstValueFrom(data$);
      console.log('Search Result:', result);
      return result;
    } catch (error) {
      console.error('Error occurred while fetching repositories:', error);
      throw error;
    }
  }
}
