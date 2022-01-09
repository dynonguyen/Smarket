namespace API_.NET.DTO
{
    public class DTO_Response
    {
        public string Msg { get; set; }
        public int Data { get; set; }

        public DTO_Response(string msg,int data)
        {
            this.Msg = msg;
            this.Data = data;
        }
    }
}
