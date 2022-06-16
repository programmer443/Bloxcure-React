// Select Componets
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const MDDrop = ({ role, onChange, value, label }) => {
  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={label ? label.toLowerCase() : ''}
        placeholder="Sselect"
        value={value}
        label={label}
        onChange={onChange}
        fullWidth
        // styles={colourStyles}
        style={{
          "opacity": 1, "height": "2.8375em"
        }}
      >
        {
          role.map(r => {

            return <MenuItem value={r}>{r}</MenuItem>
          })

        }
      </Select>
    </>
  )
}

export default MDDrop;

