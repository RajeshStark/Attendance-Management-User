<Portal>
<Dialog
  visible={this.state.visible}
  onDismiss={this._hideDialog}>
  <Dialog.Title>Apply For Regularization</Dialog.Title>
  <Dialog.Content>
    <Text style={styles.text}>Date : 26/03/20</Text>
    <Text style={styles.text}>Shortfall : 1 hr</Text>
    <Text style={styles.text}>Justification :</Text>
    <TextInput
      style={styles.textinput}
      multiline={true}
      textAlignVertical="top"
      type='outlined'
      
    />
  </Dialog.Content>
  <Dialog.Actions>
    <TouchableOpacity style={styles.touchable} 
    onPress={this._hideDialog}>
      <Text style={styles.touchabletext}>Submit</Text>
    </TouchableOpacity>
    <Button onPress={this._hideDialog}><Text style={{color:'#2B65EC'}}>Cancel</Text></Button>
  </Dialog.Actions>
</Dialog>
</Portal>