import {of, from, timer, range} from 'rxjs';

const o = range(0, 10)

o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})