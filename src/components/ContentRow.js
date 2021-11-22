import RowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovie from "./LastMovieInDb";

const ContentRow = () => {
    return (
        <div>

<div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                        </div>


                 

                        <RowMovies/>
                            
                    

                        <div className="row">

                           <LastMovie/>

                          <GenresInDb/>
                        </div>
                    </div>
        </div>

     );
}
 
export default ContentRow;