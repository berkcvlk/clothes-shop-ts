import { Grid, TableHeader } from "./styles";

const TableHeaders = () => {
  return (
    <Grid>
      {["Item Detail", "Amount", "Subtotal"].map((e: string) => (
        <TableHeader key={e}>{e}</TableHeader>
      ))}
    </Grid>
  );
};

export default TableHeaders;
