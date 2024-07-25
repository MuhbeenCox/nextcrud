import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async(id) =>{
    const apiURL = process.env.API_URL;
    try{
        const res = await fetch(`${apiURL}/api/topics/${id}`, {cache: "no-store"});
    
        if (!res.ok) {
            throw new Error('Unable To Get Topic');
        }

        return res.json();
        
    } catch (error) {
      console.log(error);
    }
}

export default async function EditTopic({ params }){

        const { id } = params;
        const { topic } = await getTopicById(id);
        const { title ,description} = topic;

    return (
      
       <EditTopicForm id={id} title={title} description={description}/>
    )
}